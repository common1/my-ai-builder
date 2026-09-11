'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/texstarea";
import { useToast } from "@/components/ui/toast";

export default function Home() {
  const { success, error, toast } = useToast()

  return (
    <Container className="mt-4">
      <Input type="text" placeholder="Full name" className="mb-2" />
      <Textarea placeholder="bio" />
      <div>
        <Badge variant="success">ReactJs</Badge>
      </div>
      <Button onClick={() => success('Testing')} className="my-2">
        Click here
      </Button>
    </Container>
  );
}
