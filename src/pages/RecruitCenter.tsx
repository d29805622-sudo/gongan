import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, User, Gamepad2, CreditCard, Settings, Bell } from 'lucide-react';

export default function RecruitCenter() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 'ORD001',
      customer: '老板A',
      game: '英雄联盟',
      date: '2024-01-16',
      time: '20:00',
      duration: 2,
      price: 100,
      status: 'confirmed',
    },
    {
      id: 'ORD002',
      customer: '老板B',
      game: 'CS:GO',
      date: '2024-01-15',
      time: '14:00',
      duration: 3,
      price: 240,
      status: 'completed',
    },
  ];

  const stats = [
    { label: '本月接单', value: '12', icon: Calendar },
    { label: '本月收入', value: '2400元', icon: CreditCard },
    { label: '好评率', value: '98%', icon: Gamepad2 },
    { label: '在线时长', value: '48小时', icon: Clock },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/10 text-green-400';
      case 'completed':
        return 'bg-blue-500/10 text-blue-400';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'cancelled':
        return 'bg-red-500/10 text-red-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '已确认';
      case 'completed':
        return '已完成';
      case 'pending':
        return '待确认';
      case 'cancelled':
        return '已取消';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/recruit')}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              返回
            </button>
            <h1 className="text-2xl font-bold text-text-primary">打手中心</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-dark-card rounded-lg hover:bg-dark-light transition-colors">
              <Bell className="w-5 h-5 text-text-secondary" />
            </button>
            <button className="p-2 bg-dark-card rounded-lg hover:bg-dark-light transition-colors">
              <Settings className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-card rounded-xl p-6 border border-dark-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
              <div className="p-6 border-b border-dark-border">
                <h2 className="text-lg font-bold text-text-primary">我的订单</h2>
              </div>
              <div className="divide-y divide-dark-border">
                {orders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-dark-light/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <User className="w-6 h-6 text-primary-light" />
                        </div>
                        <div>
                          <div className="font-bold text-text-primary">{order.customer}</div>
                          <div className="text-sm text-text-secondary">{order.game}</div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-text-secondary">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {order.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {order.time}
                      </span>
                      <span>{order.duration}小时</span>
                      <span className="text-accent font-bold">{order.price}元</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-dark-border text-center">
                <button className="text-primary-light hover:text-primary transition-colors">
                  查看全部订单 →
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-card rounded-xl border border-dark-border p-6">
              <h2 className="text-lg font-bold text-text-primary mb-4">个人信息</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-text-primary">电竞小王子</div>
                  <div className="text-sm text-text-secondary">ID: #0001</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-dark-border">
                  <span className="text-text-secondary">游戏项目</span>
                  <span className="text-text-primary">英雄联盟</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-dark-border">
                  <span className="text-text-secondary">段位</span>
                  <span className="text-accent">钻石I</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-dark-border">
                  <span className="text-text-secondary">时薪</span>
                  <span className="text-text-primary">50元/小时</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-text-secondary">状态</span>
                  <span className="text-green-400">在线</span>
                </div>
              </div>
              <button className="w-full mt-6 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
                编辑资料
              </button>
            </div>

            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-text-primary mb-2">今日目标</h3>
              <div className="text-3xl font-bold text-accent mb-4">3单</div>
              <div className="w-full bg-dark-light rounded-full h-2">
                <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
                <span className="text-text-secondary">已完成 2单</span>
                <span className="text-text-secondary">剩余 1单</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}