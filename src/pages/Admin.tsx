import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, LogOut } from "lucide-react";

type EventRow = {
  id: string;
  event_date: string;
  event_time: string;
  city: string;
  venue: string;
};

const Admin = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [form, setForm] = useState({ event_date: "", event_time: "", city: "", venue: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/auth");
        return;
      }
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        toast.error("Nemáš admin oprávnenia.");
        await supabase.auth.signOut();
        navigate("/auth");
        return;
      }
      setIsAdmin(true);
      setChecking(false);
      loadEvents();
    };
    init();
  }, [navigate]);

  const loadEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });
    if (error) toast.error(error.message);
    else setEvents(data ?? []);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("events").insert([form]);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Event pridaný");
    setForm({ event_date: "", event_time: "", city: "", venue: "" });
    loadEvents();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Event zmazaný");
    loadEvents();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (checking || !isAdmin) {
    return <div className="min-h-screen flex items-center justify-center text-foreground">Načítavam...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-spaced text-xl uppercase">Admin · Podujatia</h1>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-display italic text-muted-foreground hover:text-foreground">
              ← Späť na web
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={14} className="mr-2" /> Odhlásiť
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display text-spaced uppercase text-lg mb-6">Pridať nový event</h2>
          <form onSubmit={handleAdd} className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event_date">Dátum</Label>
              <Input
                id="event_date"
                type="date"
                value={form.event_date}
                onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event_time">Čas</Label>
              <Input
                id="event_time"
                type="time"
                value={form.event_time}
                onChange={(e) => setForm({ ...form, event_time: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Mesto</Label>
              <Input
                id="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="venue">Priestor</Label>
              <Input
                id="venue"
                value={form.venue}
                onChange={(e) => setForm({ ...form, venue: e.target.value })}
                required
                maxLength={200}
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" disabled={saving} className="w-full md:w-auto">
                {saving ? "Pridávam..." : "Pridať event"}
              </Button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="font-display text-spaced uppercase text-lg mb-4">Zoznam eventov</h2>
          {events.length === 0 ? (
            <p className="text-muted-foreground italic font-display">Zatiaľ žiadne eventy.</p>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {events.map((ev) => (
                <li
                  key={ev.id}
                  className="grid grid-cols-1 md:grid-cols-[140px_80px_1fr_auto] items-center gap-4 py-4"
                >
                  <span className="font-display italic">{ev.event_date}</span>
                  <span className="font-display">{ev.event_time}</span>
                  <div>
                    <p className="font-display uppercase text-spaced text-sm">{ev.city}</p>
                    <p className="text-sm text-muted-foreground">{ev.venue}</p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(ev.id)}>
                    <Trash2 size={14} />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default Admin;
