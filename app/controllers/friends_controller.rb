class FriendsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    rescue_from ActiveRecord::RecordNotFound, with: :render_error
    def index
        render json: Friend.all
    end

    def create
        friend = Friend.create!(pet_id: params[:pet_id], animal_id: params[:animal_id])
        render json: friend, status: :created_at
    end

    def destroy
        friend = Friend.find(params[:id])
        friend.destroy
        head :no_content
    end

    private

    def render_unprocessable(i)
        render json: {errors: i.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_error(e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end
    
end
