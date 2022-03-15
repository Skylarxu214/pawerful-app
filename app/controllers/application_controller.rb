class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authorize
    
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private

    def authorize
      @pet = Pet.find_by(id: session[:pet_id])
      render json: {errors: ["Not Authorized"]}, status: 401 unless @pet
    end


end
