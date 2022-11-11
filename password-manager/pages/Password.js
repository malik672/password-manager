import Header from "../components/Header"
import { useRouter } from "next/router"
import Link from "next/link";

export default function Password() {
  const router = useRouter()
  const {query: {id},} = router;
  const {query: {eel},} = router;
  return (
      <div>
          <div><Header/></div>
          <div>
            <p></p>
            <form>
              <div>
                <label>Username</label>
                <p readOnly>{id}</p>
              </div>
              <div>
                <label>Password</label>
                <p readOnly></p>
              </div>
            </form>
          </div>
      </div>
  )
}
