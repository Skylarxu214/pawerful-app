class PetsController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    rescue_from ActiveRecord::RecordNotFound, with: :render_error

    def index
        render json: Pet.all 
    end

    def show 
        pet = Pet.find(params[:id])
        render json: pet
    end

    def create
        pet = Pet.create!(pet_params)
        if pet.valid?
            session[:pet_id] = pet.id
            render json: pet, status: :created
        else
            render json: {errors: pet.errors.full_message}, status: :unprocessable_entity
        end
    end

    def showme
        pet = Pet.find_by(id: session[:pet_id])
        render json: pet, serializer: PetSerializer, status: :ok
    end


    private
    def pet_params
        params.permit(:name, :password, :img, :password_confirmation, :animal, :breed, :size, :age, :special_needs, :shelter_id)
    end

    # def authorize
    #     return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :pet_id 
    # end

    def render_unprocessable(i)
        render json: {errors: i.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_error(e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end
end
