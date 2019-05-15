class Player < ApplicationRecord

validates :name, presence: true

Player.all.select{|player| player.id > 88}

end
