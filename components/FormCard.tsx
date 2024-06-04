import { Form } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDistance } from "date-fns";
import { Badge } from "./ui/badge";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export default function FormCard({ form }: { form: Form }) {
  return (
    <Card className="rounded">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && (
            <Badge variant={`destructive`} className="">
              Draft
            </Badge>
          )}
        </CardTitle>
        <CardDescription>
          {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button asChild className="w-full rounded mt-2 text-md bg-primary/50">
            <Link
              href={`/forms/${form.id}`}
              className="flex items-center gap-4"
            >
              View Submission <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button asChild className="w-full rounded mt-2 text-md" variant={`secondary`}>
            <Link
              href={`/builder/${form.id}`}
              className="flex items-center gap-4"
            >
              Edit Form <FaEdit/>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
