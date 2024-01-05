import { Route, Routes } from "react-router-dom";
import { UserStateProvider } from "./context/UserStateContext";
import { Layout } from "./components/Layout/Layout";
import {
  Charities,
  LoginOrCreate,
  SignIn,
  CharityAdmin,
} from "./components/Charities";
import Blurb from "./utils/Blurb";

function App() {
  return (
    <UserStateProvider>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Blurb />} />
            <Route path="/charities" element={<Charities />} />
            <Route path="/charities/login" element={<LoginOrCreate />} />
            <Route path="/charities/signin" element={<SignIn />} />
            <Route path="/charities/admin/:id" element={<CharityAdmin />} />
          </Routes>
        </main>
      </Layout>
    </UserStateProvider>
  );
}

export default App;
