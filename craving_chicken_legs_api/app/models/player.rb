class Player < ApplicationRecord


Player.all.select{|player| player.id > 88}

end
