import { useNavigate, useParams } from 'react-router-dom';
import { Star, Clock, Trophy, MapPin, ChevronLeft, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { mockPlayers } from '../services/mock/players';

export default function PlayerDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(1);

  const player = mockPlayers.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-text-primary mb-2">未找到该打手</h3>
          <button
            onClick={() => navigate('/order')}
            className="text-primary-light hover:text-primary transition-colors"
          >
            返回打手列表
          </button>
        </div>
      </div>
    );
  }

  const handleBook = () => {
    if (!selectedDate || !selectedTime) {
      alert('请选择预约日期和时间');
      return;
    }
    navigate(`/order/booking/${player.id}`, {
      state: { date: selectedDate, time: selectedTime, duration },
    });
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="relative">
        <div className="h-40 md:h-60 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
        <div className="absolute top-4 left-4">
          <button
            onClick={() => navigate('/order')}
            className="flex items-center gap-2 bg-dark/50 backdrop-blur-sm text-text-primary px-4 py-2 rounded-lg hover:bg-dark/70 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
        <div className="bg-dark-card rounded-2xl border border-dark-border overflow-hidden shadow-xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={player.avatar}
                    alt={player.nickname}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-primary/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    {player.price}元/小时
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{player.nickname}</h1>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-text-primary">{player.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {player.game}
                  </span>
                  <span className="text-accent font-medium">{player.rank}</span>
                  <span className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    {player.orderCount}单完成
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    胜率{player.winRate}%
                  </span>
                </div>

                <p className="text-text-secondary mb-4">{player.description}</p>

                <div className="flex flex-wrap gap-2">
                  {player.heroes.map((hero) => (
                    <span
                      key={hero}
                      className="px-4 py-2 bg-primary/10 text-primary-light rounded-lg text-sm font-medium"
                    >
                      {hero}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-border">
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-light" />
                  选择日期
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                  {generateDates().map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 rounded-lg text-center transition-colors ${
                        selectedDate === date
                          ? 'bg-primary text-white'
                          : 'bg-dark-light text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <div className="text-xs">{date.slice(5)}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-light" />
                  选择时间
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg text-center transition-colors ${
                        selectedTime === time
                          ? 'bg-primary text-white'
                          : 'bg-dark-light text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <div className="text-xs">{time}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-border p-6 md:p-8">
            <h3 className="text-lg font-bold text-text-primary mb-4">预约时长</h3>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((hours) => (
                <button
                  key={hours}
                  onClick={() => setDuration(hours)}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    duration === hours
                      ? 'bg-primary text-white'
                      : 'bg-dark-light text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {hours}小时
                  <span className="block text-sm opacity-70">{player.price * hours}元</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-dark-border p-6 md:p-8">
            <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary-light" />
              可用时间段
            </h3>
            <div className="flex flex-wrap gap-2">
              {player.availableTime.map((time, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-500/10 text-green-400 rounded-lg text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-dark-border p-6 md:p-8 bg-dark-light/50">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-text-secondary">总计：</span>
                <span className="text-3xl font-bold text-accent">{player.price * duration}元</span>
                <span className="text-text-muted text-sm">({player.price}元/小时 × {duration}小时)</span>
              </div>
              <button
                onClick={handleBook}
                className="bg-gradient-to-r from-accent to-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
              >
                立即预约
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}