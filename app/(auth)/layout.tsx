interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div
        style={{
          backgroundImage: "url('images/auth-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="hidden md:block"
      />

      <div className="w-full h-full flex-center py-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;