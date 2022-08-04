
module Trainings
    
    class TrainingsController < ApplicationController
        def index
            trainings = Training.all
              render json: {
                trainings: trainings
              }, status: :ok
        end
    

  end
end