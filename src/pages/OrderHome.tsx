import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { mockPlayers, mockGames } from '../services/mock/players';
import PlayerCard from '../components/order/PlayerCard';
import type { Player } from '@/types';

export default function OrderHome() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPlayers = mockPlayers.filter((player) => {
    const matchSearch =
      player.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.heroes.some((hero) => hero.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchGame = selectedGame ? player.game === selectedGame : true;
    return matchSearch && matchGame;
  });

  const handleBook = (player: Player) => {
    navigate(`/order/detail/${player.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="relative">
        <img
          src={`${import.meta.env.BASE_URL}banner.jpg`}
          alt="装糖电竞"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              老板点单
            </h1>
            <p className="text-text-secondary">选择心仪的打手，开始您的游戏之旅</p>
          </div>
          
          <div className="bg-dark-card/80 backdrop-blur-md border border-dark-border rounded-xl p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索打手、游戏、英雄..."
                  className="w-full bg-dark-light text-text-primary pl-12 pr-4 py-3 md:py-4 rounded-lg border border-dark-border focus:border-primary focus:outline-none"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-dark-light text-text-secondary px-4 py-3 md:py-4 rounded-lg border border-dark-border hover:border-primary transition-colors"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="hidden sm:inline">筛选</span>
                </button>
                
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGame('');
                  }}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  重置
                </button>
              </div>
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-dark-border">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedGame('')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      !selectedGame
                        ? 'bg-primary text-white'
                        : 'bg-dark-light text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    全部游戏
                  </button>
                  {mockGames.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => setSelectedGame(game.name)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedGame === game.name
                          ? 'bg-primary text-white'
                          : 'bg-dark-light text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {game.icon} {game.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            {selectedGame ? `${selectedGame}打手` : '热门打手'}
            <span className="text-text-muted font-normal ml-2">({filteredPlayers.length}人)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} onBook={handleBook} />
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">未找到相关打手</h3>
            <p className="text-text-secondary">请尝试更换搜索关键词或筛选条件</p>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">新用户首单立减20元</h2>
          <p className="text-text-secondary mb-6">注册即送优惠券，快来体验吧！</p>
          <button
            onClick={() => navigate('/order')}
            className="bg-gradient-to-r from-accent to-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
          >
            立即领取
          </button>
        </div>
      </div>
    </div>
  );
}