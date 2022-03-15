class OwnersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_error
    def index
        render json: Owner.all
    end

    def show 
        owner = Owner.find(id: params[:id])
        render json: owner
    end

    private
    
    def render_error(e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end
end
