"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function BecomeASellerForm() {
  const [skills, setSkills] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle seller application logic here
    console.log({ skills, portfolio });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <Label htmlFor="skills">Your Skills</Label>
        <Textarea
          id="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g., Graphic Design, Web Development, Copywriting"
          required
        />
      </div>
      <div>
        <Label htmlFor="portfolio">Portfolio or Website Link</Label>
        <Input
          id="portfolio"
          type="url"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          placeholder="https://your-portfolio.com"
          required
        />
      </div>
      <Button type="submit">Submit Application</Button>
    </form>
  );
}
