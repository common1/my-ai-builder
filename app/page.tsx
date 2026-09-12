'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronIcon } from "@/components/ui/chevron-icon";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { ReplitLogo } from "@/components/ui/replit-logo";
import { Textarea } from "@/components/ui/texstarea";
import { useToast } from "@/components/ui/toast";

export default function Home() {
  const { success, error, toast } = useToast()

  return (
    <Container className="mt-4">
      <ReplitLogo />
      <Input type="text" placeholder="Full name" className="mb-2" />
      <ChevronIcon direction="up" />
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
