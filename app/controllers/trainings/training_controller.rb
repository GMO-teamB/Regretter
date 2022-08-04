class TrainingsController < ApplicationController
    def index
        trainings = Trainings.all
          render json: {
            restaurants: restaurants
          }, status: :ok
    end
end