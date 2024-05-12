import Container from '../components/Container'
import React from 'react'
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
function SignUp() {
  return (
    <>
     <Meta title="Login"/>
      <BreadCrumb title="Login"/>
      <Container class1="login-wrapper py-5 Home-wrapper-2">
      <div className="flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2 shadow-sm">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Ali"  required />
                </div>
                <div className="grid gap-2 shadow-sm">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Abdi"  required />
                </div>
              </div>
              <div className="grid gap-2 shadow-sm">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2 shadow-sm">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+252 61 718-2497"
                  required
                />
              </div>
              <div className="grid gap-2 shadow-sm">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="password" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
          </div>
    </Container>
    </>
  )
}

export default SignUp