
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type RealtimeProps = {
  table: string;
  onInsert?: (payload: any) => void;
  onUpdate?: (payload: any) => void;
  onDelete?: (payload: any) => void;
  schema?: string;
  filter?: string;
};

/**
 * Hook to subscribe to Supabase real-time changes
 */
export const useRealtime = ({
  table,
  onInsert,
  onUpdate,
  onDelete,
  schema = 'public',
  filter,
}: RealtimeProps) => {
  useEffect(() => {
    // Create a channel to listen for changes
    const channel = supabase
      .channel(`${schema}-${table}-changes`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema,
          table,
          filter,
        },
        (payload) => {
          console.log('REALTIME INSERT:', payload);
          onInsert?.(payload);
          toast({
            title: 'New item created',
            description: `A new ${table.slice(0, -1)} has been added.`,
          });
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema,
          table,
          filter,
        },
        (payload) => {
          console.log('REALTIME UPDATE:', payload);
          onUpdate?.(payload);
          toast({
            title: 'Item updated',
            description: `A ${table.slice(0, -1)} has been updated.`,
          });
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema,
          table,
          filter,
        },
        (payload) => {
          console.log('REALTIME DELETE:', payload);
          onDelete?.(payload);
          toast({
            title: 'Item deleted',
            description: `A ${table.slice(0, -1)} has been removed.`,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, schema, filter, onInsert, onUpdate, onDelete]);
};
