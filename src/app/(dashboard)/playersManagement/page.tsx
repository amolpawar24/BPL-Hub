
"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import PlayerManagement from "@/features/playerManagement/index.PlayerManagement";
import type { PlayerGridItem } from "@/features/playerManagement/components/PlayerCard";
import {
  useGetAllPlayersQuery,
  useDeletePlayerMutation,
} from "@/redux/modules/playerManagement/playerApi";

export default function PlayerManagementPage() {
  const router = useRouter();

  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    data,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetAllPlayersQuery({
    page: 1,
    limit: 100,
  });

  const [deletePlayer, { isLoading: isDeleting }] =
    useDeletePlayerMutation();

  const players = useMemo<PlayerGridItem[]>(() => {
    return (data?.data ?? []).map((player) => {
      const fullName = [
        player.firstName,
        player.lastName,
      ]
        .filter((part) => Boolean(part?.trim()))
        .join(" ")
        .trim();

      return {
        id: player.id,
        name: fullName || "Unnamed Player",
        playerCode: player.id,
        photo: player.imageUrl || null,
        role: player.role,
        status: player.status,
        city: player.village ?? undefined,
        jerseyNumber: player.jerseyNumber,
        isVerified: player.status === "approved",
      };
    });
  }, [data]);

  const handleConfirmDelete = useCallback(
    async (player: PlayerGridItem) => {
      setFeedback(null);

      try {
        // Perform the actual backend deletion.
        await deletePlayer(player.id).unwrap();

        // Fetch the latest player list from the backend.
        await refetch().unwrap();

        // The dialog can close only after the mutation succeeds.
        setFeedback({
          type: "success",
          message: `${player.name || "Player"} was deleted successfully.`,
        });

        // PlayerManagement should close the dialog when its
        // onDeleteSuccess callback is called after successful deletion.
      } catch (deleteError) {
        console.error("Failed to delete player:", deleteError);

        setFeedback({
          type: "error",
          message:
            "Unable to delete this player. Please try again.",
        });

        // Do not close the dialog on failure.
        throw deleteError;
      }
    },
    [deletePlayer, refetch],
  );

  return (
    <>
      {feedback && (
        <div
          role={feedback.type === "error" ? "alert" : "status"}
          className={`pl-management__feedback pl-management__feedback--${feedback.type}`}
        >
          <span>{feedback.message}</span>

          <button
            type="button"
            onClick={() => setFeedback(null)}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      {error && (
        <div role="alert" className="pl-management__error">
          <p>Unable to load players. Please try again.</p>

          <button
            type="button"
            onClick={() => void refetch()}
            disabled={isFetching}
          >
            {isFetching ? "Refreshing..." : "Retry"}
          </button>
        </div>
      )}

      <PlayerManagement
        players={players}
        loading={isLoading || isFetching}
        deleting={isDeleting}
        teams={[]}
        onViewPlayer={(player) => {
          router.push(
            `/playersManagement/${encodeURIComponent(player.id)}`,
          );
        }}
        onEditPlayer={(player) => {
          router.push(
            `/playersManagement/edit/${encodeURIComponent(player.id)}`,
          );
        }}
        onConfirmDelete={handleConfirmDelete}
      />
    </>
  );
}
