import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CardPizza />}
        />
        <Route
          path="/register"
          element={
            <AuthGuard requiresAuth={false}>
              <Register />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuard requiresAuth={false}>
              <Login />
            </AuthGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuard requiresAuth={true}>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthGuard requiresAuth={true}>
              <ShoppingCart />
            </AuthGuard>
          }
        />
        <Route
          path="/pizza/:id"
          element={<PizzaDetail />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App
