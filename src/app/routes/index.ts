import { Router } from "express";
import { RecipeRoutes } from "../modules/recipe/recipe.route";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { paymentRoutes } from "../modules/payment/payment.route";
import { orderRoutes } from "../modules/order/order.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/profiles",
    route: UserRoutes,
  },
  {
    path: "/recipes",
    route: RecipeRoutes,
  },
  {
    path: "/order",
    route: orderRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
