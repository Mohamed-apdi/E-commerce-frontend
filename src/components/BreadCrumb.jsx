import React from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

function BreadCrumb(props) {
    const { title } = props;
    return (
        <div className='breadcrumb py-4'>
            <div className="container">
                <div className="flex">
                    <div className="w-full flex justify-center text-center">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    {/* Use the asChild prop to integrate the Link component directly */}
                                    <BreadcrumbLink asChild>
                                        <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
