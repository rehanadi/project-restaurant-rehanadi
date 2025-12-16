interface ReviewListProps {
  children?: React.ReactNode;
}

const ReviewList = ({ children }: ReviewListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {children}
    </div>
  );
};

export default ReviewList;