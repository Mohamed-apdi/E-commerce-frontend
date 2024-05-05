import React from 'react'
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

function Login() {
  return (
    
    <>
    <Meta title="Login"/>
    <BreadCrumb title="Login"/>
      <div className="login-wrapper py-5 Home-wrapper-2">
        <div className="container">
          <div className="flex justify-center items-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Welcme Back</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Email">Email</Label>
                    <Input type="email" id="Email" placeholder="email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Passwprd</Label>
                    <Input type="password" id="password" placeholder="password" />
                  </div>
                  <Link to="/forget-password" className="text-sm mt-[-8px] font-semibold hover:underline">forget password?</Link>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex gap-3 justify-center">
              <Button>Login</Button>
              <Button className="bg-[#febd69] hover:bg-[#febd69]/80 text-black"><Link to="/sign-up">Sign up</Link></Button>
            </CardFooter>
          </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login