class SessionsController < ApplicationController
    # skip_before_action :authorize, only: :create
    
    def create
        pet=Pet.find_by(name: params[:name])
        if pet&.authenticate(params[:password])
            session[:pet_id] = pet.id
            render json: pet, status: :created
        else
            render json: {error: "Invalid name or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :pet_id
        head :no_content
    end
    
end