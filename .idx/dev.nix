{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_21
    pkgs.docker-client
    pkgs.openssl
  ];
  services.docker.enable = true;
  idx.extensions = [
    "Prisma.prisma"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}