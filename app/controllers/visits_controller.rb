class VisitsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    rescue_from ActiveRecord::RecordNotFound, with: :render_error
    def index
        render json: Visit.all
    end

    def destroy
        visit = Visit.find(params[:id])
        visit.destroy
        head :no_content
    end

    def create
        visit = Visit.create!(pet_id: params[:pet_id], owner_id: params[:owner_id], date: params[:date], apt_date: params[:apt_date], adopted: false)
        render json: visit, status: :created
    end

    def update
        visit = Visit.find(params[:id])
        visit.update(adopted: params[:adopted])
        render json: visit, status: :accepted
    end

    private

    def render_unprocessable(i)
        render json: {errors: i.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_error(e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end
end
