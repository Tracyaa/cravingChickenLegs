class PlayersController < ApplicationController

  def index
    @players = Player.all

    render json: @players
  end

  def create
    @player = Player.create(player_params)
  end




  private

  def player_params
    params.require(:player).permit(:name, :score, :character)
  end


end
