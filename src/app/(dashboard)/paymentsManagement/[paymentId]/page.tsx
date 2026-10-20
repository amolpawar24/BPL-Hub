
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import PlayerDetailsComponent, {
  type PlayerDetailsData,
} from "@/features/playerManagement/components/PlayerDetails";

import { useGetPlayerByIdQuery } from "@/redux/modules/playerManagement/playerApi";
import { usePlayerManagement } from "@/redux/modules/playerManagement/usePlayerManagement";

function getErrorMessage(error: unknown): string {
  if (typeof error !== "object" || error === null) {
    return "Something went wrong. Please try again.";
  }

  const apiError = error as {
    data?: {
      message?: string;
      error?: string;
    };
    message?: string;
    error?: string;
  };

  return (
    apiError.data?.message ??
    apiError.data?.error ??
    apiError.message ??
    apiError.error ??
    "Something went wrong. Please try again."
  );
}

export default function PlayerDetailsPage() {
  const params = useParams<{ playerId: string }>();
  const router = useRouter();

  const playerId = params.playerId;

  const [approvalError, setApprovalError] = useState<string | null>(null);

  const {
    data: player,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetPlayerByIdQuery(playerId, {
    skip: !playerId,
  });

  // Use the custom hook for all approval and rejection operations.
  const {
    approvePlayer,
    rejectPlayer,
    isApproving,
    isRejecting,
  } = usePlayerManagement();

  async function handleApprove(
    selectedPlayer: PlayerDetailsData,
  ): Promise<void> {
    setApprovalError(null);

    try {
      await approvePlayer(selectedPlayer.id);
      await refetch();
    } catch (error: unknown) {
      setApprovalError(getErrorMessage(error));
    }
  }

  async function handleReject(
    selectedPlayer: PlayerDetailsData,
  ): Promise<void> {
    setApprovalError(null);

    try {
      await rejectPlayer(selectedPlayer.id);
      await refetch();
    } catch (error: unknown) {
      setApprovalError(getErrorMessage(error));
    }
  }

  if (isLoading || isFetching) {
    return (
      <main className="pl-management">
        <div role="status" aria-live="polite">
          Loading player details...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pl-management">
        <section role="alert">
          <h2>Unable to load player</h2>

          <p>
            The player details could not be retrieved. Please try again.
          </p>

          <button
            type="button"
            onClick={() => void refetch()}
          >
            Retry
          </button>

          <button
            type="button"
            onClick={() => router.push("/playersManagement")}
          >
            Back to Players
          </button>
        </section>
      </main>
    );
  }

  if (!player) {
    return (
      <main className="pl-management">
        <section>
          <h2>Player Not Found</h2>

          <p>
            This player does not exist or is no longer available.
          </p>

          <button
            type="button"
            onClick={() => router.push("/playersManagement")}
          >
            Back to Players
          </button>
        </section>
      </main>
    );
  }

  const fullName = [player.firstName, player.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();

  const playerDetails: PlayerDetailsData = {
    id: player.id,
    name: fullName || "Unnamed Player",
    playerCode: player.id,
    photo: player.imageUrl || null,
    status: player.status,

    personalInfo: {
      fullName,
      firstName: player.firstName,
      lastName: player.lastName,
      email: player.email,
      phone: player.mobile,
      city: player.village,
    },

    cricketInfo: {
      role: player.role,
      battingStyle: player.battingStyle,
      bowlingStyle: player.bowlingStyle,
      jerseyNumber: player.jerseyNumber,
    },

    // This endpoint does not provide team assignment information.
    teamInfo: {},

    // Registration status must come from registration data,
    // not from the player's profile status.
    registrationInfo: {
      verificationStatus: "not_available",
    },
  };

  return (
    <PlayerDetailsComponent
      player={playerDetails}
      backHref="/playersManagement"
      onEdit={() =>
        router.push(
          `/playersManagement/edit/${encodeURIComponent(player.id)}`,
        )
      }
      onApprove={handleApprove}
      onReject={handleReject}
      isApproving={isApproving}
      isRejecting={isRejecting}
      approvalError={approvalError}
    />
  );
}
