import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  BadgeCheck,
  Globe2,
  Hammer,
  HeartHandshake,
  Package,
  Users,
} from "lucide-react";
import Link from "next/link";

const mantra = [
  {
    name: "Made with love",
    Icon: HeartHandshake,
    description:
      "Our makers are passionate about their craft, and it shows.  You will love their handywork as much as we do!",
  },
  {
    name: "Ethical, Every Time",
    Icon: Globe2,
    description:
      "We only work with makers who share our values of environmental and social responsibility.",
  },
  {
    name: "Workshop, not sweatshop",
    Icon: Hammer,
    description:
      "All products are made in our makers workshop, not a factory. We don't do mass production here!",
  },
  {
    name: "Dropship is a dirty word",
    Icon: Package,
    description:
      "Orders are shipped directly from our makers to you. No middlemen here!",
  },
  {
    name: "Verified Authenticity",
    Icon: BadgeCheck,
    description:
      "We verify the authenticity of every maker and take quality seriously. You can be sure you're getting the real deal!",
  },
  {
    name: "Community Curation",
    Icon: Users,
    description:
      "Check out our community curated lists of makers and products. We're sure you'll find something you love!",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl bg-background">
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
        {/* TODO: Add products */}
      </MaxWidthWrapper>
      <section className="border-t bg-secondary text-secondary-foreground">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {mantra.map((item) => (
              <div
                key={item.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="mt-12 md:ml-6 md:mt-0 lg:ml-0 lg:mt-6 h-16 w-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {<item.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-4 md:ml-2 md:mt-0 lg:ml-0 lg:mt-4">
                  <h3 className="text-base font-medium text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 mb-6 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
