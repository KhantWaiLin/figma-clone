import { useThreads } from "@/liveblocks.config";
import { Thread , Composer} from "@liveblocks/react-comments";

export function CommentsOverlay() {
  const { threads } = useThreads();

  return (
    <div>
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
      {/* <Composer /> */}
    </div>
  );
}