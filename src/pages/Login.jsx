import React from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
function Login() {
  return (
    
    <>
    <Meta title="Login"/>
    <BreadCrumb title="Login"/>
    <Container class1="login-wrapper py-5 Home-wrapper-2">
       
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Login</CardTitle>
            <CardDescription>
            Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2 shadow-sm">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forget-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
              <Button type="submit" className="w-full">
              Login
              </Button>
            </div>
            <div className="mt-2 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
          <div className="mt-2 text-center text-xs">
            By creating an account you agree with our <Link to="/terms-conditions" className="underline">Terms & Conditions</Link>, <Link to="/privacy-policy" className="underline">Privacy Policy</Link>,
          </div>
          </CardContent>
        </Card>
    </Container>

    </>
  )
}

export default Login