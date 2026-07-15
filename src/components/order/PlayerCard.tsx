import { Star, Clock, Trophy } from 'lucide-react';
import type { Player } from '@/types';

interface PlayerCardProps {
  player: Player;
  onBook: (player: Player) => void;
}

export default function PlayerCard({ player, onBook }: PlayerCardProps) {
  return (
    <div className="group bg-dark-card rounded-xl overflow-hidden border border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative h-40 bg-gradient-to-br from-dark-light to-dark-card overflow-hidden">
        <img
          src={player.avatar}
          alt={player.nickname}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-white">{player.price}元/小时</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={player.avatar}
            alt={player.nickname}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <h3 className="text-lg font-bold text-text-primary">{player.nickname}</h3>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span>{player.game}</span>
              <span className="text-accent">{player.rank}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-4 line-clamp-2">{player.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-text-primary">{player.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4 text-primary-light" />
            <span className="text-sm text-text-secondary">{player.orderCount}单</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="text-sm text-text-secondary">胜率{player.winRate}%</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {player.heroes.map((hero) => (
            <span
              key={hero}
              className="px-3 py-1 bg-dark-light rounded-full text-xs text-text-secondary"
            >
              {hero}
            </span>
          ))}
        </div>

        <button
          onClick={() => onBook(player)}
          className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
        >
          立即预约
        </button>
      </div>
    </div>
  );
}