import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          The marketplace for <span className="text-primary">authentic </span>
          makers
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to <span className="text-primary">Makeable</span>. Every
          object in our store is lovingly crafted by real, independent makers
          and shipped directly to you. There&apos;s no mass produced,
          straight-to-landfill junk around these parts!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Popular Products
          </Link>
          <Button variant="secondary">The Makeable Mantra</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
