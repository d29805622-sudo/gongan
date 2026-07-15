export interface Player {
  id: string;
  nickname: string;
  avatar: string;
  game: string;
  rank: string;
  price: number;
  rating: number;
  orderCount: number;
  heroes: string[];
  winRate: number;
  description: string;
  availableTime: string[];
}

export interface Game {
  id: string;
  name: string;
  icon: string;
  ranks: string[];
}

export interface Review {
  id: string;
  orderId: string;
  userId: string;
  playerId: string;
  rating: number;
  content: string;
  createTime: string;
}

export interface Order {
  id: string;
  playerId: string;
  playerName: string;
  playerAvatar: string;
  game: string;
  date: string;
  time: string;
  duration: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createTime: string;
}

export interface RecruitForm {
  nickname: string;
  phone: string;
  game: string;
  rank: string;
  experience: string;
  avatar: string;
  introduction: string;
}