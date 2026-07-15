import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Home from '@/pages/Home';
import RecruitHome from '@/pages/RecruitHome';
import RecruitApply from '@/pages/RecruitApply';
import RecruitCenter from '@/pages/RecruitCenter';
import OrderHome from '@/pages/OrderHome';
import PlayerDetail from '@/pages/PlayerDetail';
import Booking from '@/pages/Booking';
import OrderHistory from '@/pages/OrderHistory';

function App() {
  return (
    <BrowserRouter basename="/GG">
      <Navbar currentPage="" />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruit" element={<RecruitHome />} />
          <Route path="/recruit/apply" element={<RecruitApply />} />
          <Route path="/recruit/center" element={<RecruitCenter />} />
          <Route path="/order" element={<OrderHome />} />
          <Route path="/order/detail/:id" element={<PlayerDetail />} />
          <Route path="/order/booking/:id" element={<Booking />} />
          <Route path="/order/history" element={<OrderHistory />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;