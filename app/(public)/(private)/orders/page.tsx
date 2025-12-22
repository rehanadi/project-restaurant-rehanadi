'use client';

import { useState, useMemo } from 'react';
import Section from '@/components/layouts/section';
import OrdersContainer from './partials/orders-container';
import OrdersSection from './partials/orders-section';
import OrdersStatus from './partials/orders-status';
import OrderList from '@/features/orders/components/order-list';
import OrderItem from '@/features/orders/components/order-item';
import OrderItemSkeleton from '@/features/orders/components/order-item-skeleton';
import SearchBox from '@/features/orders/components/search-box';
import Menu from '@/features/shared/components/menu';
import { Button } from '@/components/ui/button';
import { useGetOrders } from '@/features/orders/hooks';
import { OrderStatus } from '@/features/orders/types';
import { useDebounce } from '@/features/shared/hooks/use-debounce';

const OrdersPage = () => {
  const [status, setStatus] = useState<OrderStatus>('done');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearch = useDebounce(searchQuery, 500);
  const { data, isLoading } = useGetOrders(status, page, 5);

  const { orders = [], pagination } = data?.data || {};

  const filteredOrders = useMemo(() => {
    if (!orders.length) return [];

    if (!debouncedSearch) return orders;

    const query = debouncedSearch.toLowerCase();
    return orders.filter((order) =>
      order.restaurants.some(
        (restaurant) =>
          restaurant.restaurant.name.toLowerCase().includes(query) ||
          restaurant.items.some((item) => item.menuName.toLowerCase().includes(query))
      )
    );
  }, [orders, debouncedSearch]);

  const handleStatusChange = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const showLoadMore = useMemo(() => {
    if (!pagination) return false;
    return page < pagination.totalPages;
  }, [pagination, page]);

  if (isLoading && page === 1) {
    return (
      <OrdersContainer>
        <Menu />
        <Section title="My Orders" className="py-0 md:py-0 md:gap-6">
          <OrdersSection>
            <SearchBox value={searchQuery} onChange={setSearchQuery} />
            <OrdersStatus value={status} onChange={handleStatusChange} />
            <OrderList>
              <OrderItemSkeleton />
              <OrderItemSkeleton />
              <OrderItemSkeleton />
            </OrderList>
          </OrdersSection>
        </Section>
      </OrdersContainer>
    );
  }

  return (
    <OrdersContainer>
      <Menu />
      <Section title="My Orders" className="py-0 md:py-0 md:gap-6">
        <OrdersSection>
          <SearchBox value={searchQuery} onChange={setSearchQuery} />
          <OrdersStatus value={status} onChange={handleStatusChange} />

          {filteredOrders.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <p className="text-lg font-semibold text-neutral-600">No orders found</p>
            </div>
          ) : (
            <>
              <OrderList>
                {filteredOrders.map((order) => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </OrderList>

              {showLoadMore && (
                <Button
                  className="w-40 self-center"
                  variant="outline"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Load More'}
                </Button>
              )}
            </>
          )}
        </OrdersSection>
      </Section>
    </OrdersContainer>
  );
};

export default OrdersPage;