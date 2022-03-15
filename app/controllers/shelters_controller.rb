class SheltersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_error
    def index 
    render json: Shelter.all
    end

    def show 
        shelter = Shelter.find(params[:id])
        render json: shelter
    end

    private

    def render_error(e)
        render json: {error: "#{e.model} is not found"}, status: :not_found
    end

end
