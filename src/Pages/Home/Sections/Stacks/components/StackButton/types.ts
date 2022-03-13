export type Props = {
  onClick?(): void;
  data: {
    title: string;
    content: string;
  };
  isActive: boolean;
};
