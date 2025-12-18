"use client";

import Section from "@/components/layouts/section";
import OrdersContainer from "./partials/orders-container";
import OrdersSection from "./partials/orders-section";
import OrdersStatus from "./partials/orders-status";
import OrderList from "@/features/orders/components/order-list";
import OrderItem from "@/features/orders/components/order-item";
import SearchBox from "@/features/orders/components/search-box";
import Menu from "@/features/shared/components/menu";

const OrdersPage = () => {
  return (
    <OrdersContainer>
      <Menu />
      <Section
        title="My Orders"
        className="py-0 md:py-0 md:gap-6"
      >
        <OrdersSection>
          <SearchBox />
          <OrdersStatus />
          <OrderList>
            <OrderItem />
            <OrderItem />
          </OrderList>
        </OrdersSection>
      </Section>
    </OrdersContainer>
  );
};

export default OrdersPage;