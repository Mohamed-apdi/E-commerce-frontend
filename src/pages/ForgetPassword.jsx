import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
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
import Container from '../components/Container'
function ForgetPassword() {
  return (
    <>
    <Meta title="forget-password"/>
    <BreadCrumb title="Forget Password"/>
    <Container class1="forget-wrapper py-5 Home-wrapper-2">
       <div className="flex justify-center items-center">
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle className="text-center">Reset Your Password</CardTitle>
                <CardDescription>We will send you an email to reset your password</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="Email">Email</Label>
                      <Input type="email" id="Email" placeholder="email" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex  gap-3 justify-center">
                <Button className="border-2" variant="secondary"><Link to="/login">Cancel</Link></Button>
                <Button ><Link to="/sign-up">Send</Link></Button>
              </CardFooter>
            </Card>
          </div>
    </Container>
    </>
  )
}

export default ForgetPassword