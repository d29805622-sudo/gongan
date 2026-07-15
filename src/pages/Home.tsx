import { useNavigate } from 'react-router-dom';
import { Gamepad2, Users, Shield, Zap, Award, Star } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: '安全可靠',
      description: '实名认证，严格审核，确保交易安全',
    },
    {
      icon: Zap,
      title: '极速响应',
      description: '10分钟内匹配打手，即刻开始游戏',
    },
    {
      icon: Award,
      title: '专业服务',
      description: '高胜率保证，不满意全额退款',
    },
    {
      icon: Star,
      title: '口碑认证',
      description: '真实评价，透明可查，值得信赖',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark">
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-primary-light">平台打手超过1000人</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              专业电竞陪玩平台
              <br />
              <span className="bg-gradient-to-r from-primary-light via-secondary-light to-accent-light bg-clip-text text-transparent">
                装糖电竞
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10">
              汇聚顶尖电竞高手，提供一对一专业陪练服务
              <br className="hidden sm:block" />
              无论你是想上分还是想娱乐，这里都有适合你的打手
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => navigate('/order')}
                className="group flex items-center gap-3 bg-gradient-to-r from-accent to-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
              >
                <Gamepad2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                老板点单
              </button>
              <button
                onClick={() => navigate('/recruit')}
                className="group flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Users className="w-6 h-6" />
                加入打手
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                为什么选择
                <span className="text-primary-light"> 装糖电竞</span>？
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">严格筛选机制</h3>
                    <p className="text-text-secondary">所有打手均经过严格审核，确保技术过硬、态度良好</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">透明定价体系</h3>
                    <p className="text-text-secondary">价格公开透明，无隐藏费用，明码标价</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">无忧退款保障</h3>
                    <p className="text-text-secondary">服务不满意可申请退款，让您放心消费</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">全天在线客服</h3>
                    <p className="text-text-secondary">7x24小时客服在线，随时解答您的疑问</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop"
                  alt="电竞游戏"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark-card border border-dark-border rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-light">98%</div>
                    <div className="text-sm text-text-secondary">客户满意度</div>
                  </div>
                  <div className="w-px h-12 bg-dark-border"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">50万+</div>
                    <div className="text-sm text-text-secondary">完成订单</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">热门游戏</h2>
            <p className="text-text-secondary">涵盖主流电竞游戏，满足您的各种需求</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: '英雄联盟', icon: '🎮', players: '500+' },
              { name: 'CS:GO', icon: '🔫', players: '300+' },
              { name: '绝地求生', icon: '🍗', players: '200+' },
              { name: '王者荣耀', icon: '👑', players: '400+' },
            ].map((game, index) => (
              <div
                key={index}
                className="group bg-dark-card rounded-xl p-6 border border-dark-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                onClick={() => navigate('/order')}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{game.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{game.name}</h3>
                <p className="text-sm text-text-secondary">{game.players} 打手在线</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                  装糖电竞
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                专业电竞陪玩平台，汇聚顶尖高手，为您提供优质服务
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/')} className="text-sm text-text-secondary hover:text-primary-light transition-colors">首页</button></li>
                <li><button onClick={() => navigate('/order')} className="text-sm text-text-secondary hover:text-primary-light transition-colors">老板点单</button></li>
                <li><button onClick={() => navigate('/recruit')} className="text-sm text-text-secondary hover:text-primary-light transition-colors">打手招募</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">服务支持</h3>
              <ul className="space-y-2">
                <li><button className="text-sm text-text-secondary hover:text-primary-light transition-colors">帮助中心</button></li>
                <li><button className="text-sm text-text-secondary hover:text-primary-light transition-colors">用户协议</button></li>
                <li><button className="text-sm text-text-secondary hover:text-primary-light transition-colors">隐私政策</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">联系我们</h3>
              <ul className="space-y-2">
                <li className="text-sm text-text-secondary">客服热线：400-888-8888</li>
                <li className="text-sm text-text-secondary">邮箱：support@zhuangtang.com</li>
                <li className="text-sm text-text-secondary">工作时间：7x24小时</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-dark-border text-center">
            <p className="text-sm text-text-muted">
              © 2024 装糖电竞. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}