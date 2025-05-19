import { GrowthBook } from "@growthbook/growthbook-react";

export const growthbook = new GrowthBook({
  features: {
    showForgotPasswordButton: {
      defaultValue: true,
    },
  },
});