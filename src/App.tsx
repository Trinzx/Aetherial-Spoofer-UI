/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  Library, 
  User, 
  RefreshCcw, 
  Settings, 
  LifeBuoy, 
  LogOut,
  Search,
  Bell,
  ChevronRight,
  Download,
  Play,
  Info,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Check,
  Menu,
  X,
  Cpu,
  Fingerprint,
  Shield,
  Ghost,
  Database,
  Eraser,
  Radar,
  EyeOff,
  RotateCcw
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---

type View = 'hwid' | 'serial' | 'security' | 'spoofer' | 'flasher' | 'cleaner' | 'trace' | 'stealth' | 'restore' | 'settings';

interface Product {
  id: string;
  name: string;
  version: string;
  status: 'installed' | 'available' | 'updating' | 'expired';
  category: string;
  description: string;
  image: string;
  tags: string[];
}

// --- Components ---

const GlassCard = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn(
      "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300",
      onClick && "cursor-pointer hover:bg-white/10 hover:border-red-600/30 hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] hover:-translate-y-1",
      className
    )}
  >
    {children}
  </div>
);

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  isLoading,
  onClick 
}: { 
  children: React.ReactNode, 
  className?: string, 
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline',
  isLoading?: boolean,
  onClick?: () => void
}) => {
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
    ghost: "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white",
    outline: "bg-transparent border border-white/10 hover:border-red-600/50 hover:bg-red-600/5 text-white"
  };

  return (
    <button 
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        "relative flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
    >
      {isLoading ? (
        <RefreshCcw className="w-5 h-5 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

const Input = ({ label, type = 'text', placeholder, value, onChange }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">{label}</label>}
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 focus:bg-white/[0.08] transition-all"
    />
  </div>
);

// --- Mock Data ---

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Aether Core', version: 'v2.4.1', status: 'installed', category: 'Engine', description: 'Core optimization and rendering engine enhancement for high-performance visual fidelity.', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop', tags: ['Performance', 'RTX'] },
  { id: '2', name: 'Chrono Bloom', version: 'v1.0.5', status: 'updating', category: 'Shaders', description: 'Advanced temporal post-processing suite with realistic light scatter and bloom mechanics.', image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=800&auto=format&fit=crop', tags: ['Visuals', 'Cinematic'] },
  { id: '3', name: 'Nova Toolkit', version: 'v3.2.0', status: 'available', category: 'Utility', description: 'Professional modding and development tools for the Nova ecosystem.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', tags: ['Tools', 'SDK'] },
  { id: '4', name: 'Vertex Pro', version: 'v1.1.0', status: 'expired', category: 'Geometry', description: 'High-detail tessellation and vertex manipulation tools for realistic terrain.', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop', tags: ['Modeling', 'Premium'] },
];

// --- Main Views ---

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-[#050505]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[200px] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
        
        {/* Animated Particles Simulation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random()
              }}
              animate={{ 
                y: [null, "-100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center font-black text-white mb-4">
            A
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight uppercase">AETHERIAL</h1>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-2">Enterprise Access Protocol</p>
        </div>

        <GlassCard className="p-10 border-white/5 bg-black/40 backdrop-blur-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input 
              label="Licence Key" 
              placeholder="AETH-XXXX-XXXX-XXXX" 
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
              <label className="flex items-center gap-2 text-zinc-500 cursor-pointer hover:text-zinc-400 transition-colors">
                <input type="checkbox" className="w-3 h-3 rounded border-white/10 bg-white/5 accent-red-600" />
                Persistent session
              </label>
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors">Emergency Recovery</a>
            </div>

            <Button isLoading={loading} className="w-full py-4 mt-2">
              Launch Terminal
            </Button>
          </form>
        </GlassCard>

        <div className="flex justify-center gap-6 mt-8 text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          <span>Build ID: F982-A0</span>
          <span>Encryption: AES-256</span>
        </div>
      </motion.div>
    </div>
  );
};

const HWID_DATA = [
  { id: '1', title: 'Machine GUID', baseline: '8aaac934-28ee-18e8-cb59-cf', current: '45a6ba0f-6ffc-42cf-9626-', status: 'spoofed' },
  { id: '2', title: 'HW Profile GUID', baseline: '{be5e0133-1177-cfe0-25c5-e}', current: '{d572dd27-31e2-491b-932d}', status: 'spoofed' },
  { id: '3', title: 'Motherboard Vendor', baseline: '7gcTnD8XuAvZYHu', current: 'ASUSTeK COMPUTER INC.', status: 'spoofed' },
  { id: '4', title: 'Motherboard Product', baseline: 'yVrX3YPk1uRrOMy', current: 'PRIME B450M-A II', status: 'spoofed' },
  { id: '5', title: 'Storage Identifier', baseline: 'DRIVE_0_ID_OFFLINE', current: 'SAMSUNG_SSD_980_PRO', status: 'unspoofed' },
];

const SerialChangerView = () => {
  const [spoofing, setSpoofing] = useState<string | null>(null);

  const handleSpoof = (target: string) => {
    setSpoofing(target);
    setTimeout(() => setSpoofing(null), 2000);
  };

  const components = [
    { label: 'Registry IDs', icon: Database },
    { label: 'Network (MAC)', icon: Radar },
    { label: 'Disk Serials', icon: Database },
    { label: 'Motherboard', icon: Cpu },
    { label: 'CPU IDs', icon: Cpu },
    { label: 'GPU IDs', icon: Cpu },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-4xl mx-auto animate-in fade-in zoom-in duration-500">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Individual Serial Changer</h2>
        <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Select a direct module to bypass hardware mapping</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {components.map((comp) => (
          <button
            key={comp.label}
            onClick={() => handleSpoof(comp.label)}
            disabled={!!spoofing}
            className="group relative bg-zinc-900/40 border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-red-600/50 hover:bg-red-600/[0.02] flex items-center justify-between overflow-hidden active:scale-95 disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-red-500 transition-colors">
                <comp.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">{comp.label}</span>
            </div>
            
            {spoofing === comp.label ? (
              <RefreshCcw className="w-4 h-4 text-red-500 animate-spin" />
            ) : (
              <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-red-500 transition-all group-hover:translate-x-1" />
            )}
            
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        ))}
      </div>

      <div className="mt-16 w-full">
        <button 
          disabled={!!spoofing}
          className="w-full py-6 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.4em] rounded-xl shadow-[0_0_40px_rgba(220,38,38,0.2)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 relative overflow-hidden group"
        >
          <span className="relative z-10">Spoof All Hardware</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
        <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest mt-6 font-bold">Authorized session: Local Host Verified</p>
      </div>
    </div>
  );
};

const RestoreView = () => {
  const [restoring, setRestoring] = useState(false);

  const handleRestore = () => {
    setRestoring(true);
    setTimeout(() => setRestoring(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-2xl mx-auto animate-in fade-in zoom-in duration-500 text-center">
      <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 italic">Restore Original Values</h2>
      
      <div className="w-full bg-[#051508] border border-emerald-500/20 rounded-xl p-8 mb-8 backdrop-blur-xl">
        <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold mb-2">
          <CheckCircle2 className="w-5 h-5" />
          <span className="uppercase tracking-widest text-sm">Backup found!</span>
        </div>
        <p className="text-[10px] text-emerald-500/60 uppercase font-mono tracking-widest mb-6">Created: 4/5/2026 2:41 PM</p>
        
        <p className="text-emerald-500/80 text-sm leading-relaxed max-w-sm mx-auto">
          This will restore ALL your original hardware identifiers back to their real values.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <button 
          onClick={handleRestore}
          disabled={restoring}
          className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-[0.3em] rounded-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {restoring ? <RefreshCcw className="w-5 h-5 animate-spin" /> : "Restore All Original Values"}
        </button>
        
        <button className="w-full py-5 bg-[#1a0505] hover:bg-[#2a0808] text-red-600/60 hover:text-red-600 font-black uppercase tracking-[0.3em] rounded-lg border border-red-600/10 transition-all">
          Delete Backup File
        </button>
      </div>
    </div>
  );
};

const StealthView = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 text-center relative">
      {active && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-red-600/10 rounded-full blur-[120px]"
          />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-red-500 rounded-full"
              initial={{ x: "50%", y: "50%", opacity: 0 }}
              animate={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
            />
          ))}
        </div>
      )}

      <motion.div
        animate={active ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10"
      >
        <h2 className={cn(
          "text-4xl font-black uppercase tracking-[0.2em] mb-4 transition-colors duration-500",
          active ? "text-red-500" : "text-white"
        )}>Stealth Mode</h2>
        
        <p className="text-zinc-500 text-sm leading-relaxed max-w-lg mb-12 uppercase tracking-wide">
          Hides all evidence the spoofer was ever run. <br />
          Cleans Prefetch, UserAssist, BAM, ShimCache, Jump Lists, Defender history, 
          and disables Windows telemetry.
        </p>

        <button 
          onClick={() => setActive(!active)}
          className={cn(
            "relative px-16 py-6 border transition-all duration-500 uppercase font-black tracking-[0.4em] text-sm group overflow-hidden",
            active 
              ? "bg-red-600 border-red-600 text-white shadow-[0_0_50px_rgba(220,38,38,0.4)]" 
              : "bg-transparent border-zinc-700 text-zinc-400 hover:border-white hover:text-white"
          )}
        >
          <span className="relative z-10">{active ? "Stealth Mode Active" : "Activate Stealth Mode"}</span>
          {active && (
            <motion.div 
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}
        </button>

        <AnimatePresence>
          {active && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-12 p-6 bg-red-600/5 border border-red-600/20 rounded-xl backdrop-blur-md"
            >
              <div className="flex items-center justify-center gap-3 text-red-500 text-[10px] uppercase font-black tracking-widest">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                System Encryption Engaged & Active
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {['TELEMETRY: OFF', 'TRACES: WIPED', 'MEMORY: CLOAKED'].map(stat => (
                  <div key={stat} className="text-[8px] text-red-400 font-mono italic">{stat}</div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const CleanerView = () => {
  const [cleaning, setCleaning] = useState(false);
  const [checked, setChecked] = useState(['browsers', 'anti_cheat', 'logs', 'temp']);

  const toggle = (id: string) => {
    setChecked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const categories = [
    { id: 'browsers', label: 'Browsers & Cookies', desc: 'Chrome, Edge, Firefox cleanup' },
    { id: 'anti_cheat', label: 'Anti Cheat Traces', desc: 'System execution history & logs' },
    { id: 'logs', label: 'Windows Event Logs', desc: 'Security and application logs' },
    { id: 'temp', label: 'Temporary Files', desc: 'User and system temp cache' },
    { id: 'dns', label: 'DNS & ARP Cache', desc: 'Network identifier flush' },
    { id: 'defender', label: 'Defender History', desc: 'Anti-virus detection logs' },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">System Cleaner</h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1 font-bold">Purge trace identifiers from local environment</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest mb-1">Status</p>
          <p className="text-xs font-black text-emerald-500 uppercase tracking-widest">Optimized</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => toggle(cat.id)}
            className={cn(
              "flex items-center gap-5 p-6 rounded-xl border transition-all duration-300 text-left group",
              checked.includes(cat.id) 
                ? "bg-red-600/5 border-red-600/30" 
                : "bg-zinc-900/30 border-white/5 hover:border-white/10"
            )}
          >
            <div className={cn(
              "w-6 h-6 rounded border flex items-center justify-center transition-all",
              checked.includes(cat.id) ? "bg-red-600 border-red-600" : "bg-transparent border-zinc-700"
            )}>
              {checked.includes(cat.id) && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <div>
              <p className={cn(
                "text-sm font-black uppercase tracking-widest transition-colors",
                checked.includes(cat.id) ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
              )}>{cat.label}</p>
              <p className="text-[10px] text-zinc-600 mt-1 uppercase font-bold tracking-wider">{cat.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 p-8 bg-zinc-900/20 border border-white/5 rounded-2xl flex items-center justify-between">
        <div className="flex gap-8">
          <div>
            <p className="text-[9px] text-zinc-600 uppercase font-black mb-1">Items Selected</p>
            <p className="text-xl font-black text-white">{checked.length}</p>
          </div>
          <div>
            <p className="text-[9px] text-zinc-600 uppercase font-black mb-1">Estimated Space</p>
            <p className="text-xl font-black text-white">~450 MB</p>
          </div>
        </div>
        
        <button 
          onClick={() => {
            setCleaning(true);
            setTimeout(() => setCleaning(false), 2500);
          }}
          disabled={cleaning || checked.length === 0}
          className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.3em] rounded-lg shadow-xl shadow-red-600/20 transition-all disabled:opacity-50 flex items-center gap-3"
        >
          {cleaning ? <RefreshCcw className="w-5 h-5 animate-spin" /> : "Run Cleaner"}
        </button>
      </div>
    </div>
  );
};

const SpooferView = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setLoading(id);
    setTimeout(() => setLoading(null), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h2 className="text-3xl font-bold text-white uppercase tracking-[0.1em] mb-8 text-center">
        HARDWARE IDENTITY & SYSTEM MANAGEMENT
      </h2>
      
      <div className="w-full max-w-2xl bg-amber-500/5 border border-amber-500/20 rounded-xl p-8 mb-12 text-center relative group">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050505] px-4">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
        </div>
        <p className="text-amber-500/90 text-xs font-bold uppercase tracking-widest leading-loose">
          A backup of your original values will be saved automatically.<br />
          BitLocker suspension is required prior to preparing the system.<br />
          Run 'PREPARE SYSTEM' first, then reboot and use 'SPOOF THIS PC'.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-lg">
        <button 
          onClick={() => handleClick('prepare')}
          disabled={!!loading}
          className="w-full py-6 bg-transparent border-2 border-red-900/40 hover:border-red-600 text-red-600 font-black uppercase tracking-[0.3em] rounded transition-all hover:bg-red-600/5 disabled:opacity-50"
        >
          {loading === 'prepare' ? <RefreshCcw className="w-5 h-5 mx-auto animate-spin" /> : "PREPARE SYSTEM FOR SPOOFING"}
        </button>

        <button 
          onClick={() => handleClick('spoof')}
          disabled={!!loading}
          className="w-full py-7 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.3em] rounded shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {loading === 'spoof' ? <RefreshCcw className="w-5 h-5 mx-auto animate-spin" /> : "SPOOF THIS PC"}
        </button>

        <button 
          onClick={() => handleClick('cli')}
          disabled={!!loading}
          className="w-full py-5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-black uppercase tracking-[0.2em] rounded transition-all disabled:opacity-50"
        >
          {loading === 'cli' ? <RefreshCcw className="w-5 h-5 mx-auto animate-spin" /> : "LAUNCH ADVANCED CLI SPOOFER"}
        </button>
      </div>
    </div>
  );
};

const FlasherView = () => {
  const [enabled, setEnabled] = useState(true);
  const [model, setModel] = useState('');

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-700 flex flex-col gap-8 pb-10">
      <div className="bg-red-950/10 border border-red-900/20 rounded-xl p-8 text-center">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
          PERSISTENT FLASHING (PHASE 0) performs a deep SMBIOS/DMI override using 
          hardware-level drivers. This is the most effective way to eliminate permanent bans but 
          requires system stability.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 mt-4">
        <div className="flex items-center gap-6">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white">ENABLE PERSISTENT BIOS FLASHING:</span>
          <button 
            onClick={() => setEnabled(!enabled)}
            className={cn(
              "w-5 h-5 border flex items-center justify-center transition-all rounded-[2px]",
              enabled ? "bg-white border-white text-black" : "bg-transparent border-white/20"
            )}
          >
            {enabled && <Check className="w-3.5 h-3.5 stroke-[4]" />}
          </button>
        </div>

        <div className="w-full max-w-md">
          <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-3 text-center">SELECT MOTHERBOARD MODEL</p>
          <div className="flex gap-2">
            <select 
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="flex-1 bg-white/5 border border-white/20 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
            >
              <option value="">Select Model...</option>
              <option value="asus">ASUS ROG Z790</option>
              <option value="msi">MSI MAG B650</option>
              <option value="gigabyte">GIGABYTE AORUS</option>
            </select>
            <button className="px-6 py-3 border border-cyan-500 text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500/10 transition-all rounded">
              AUTO-DETECT
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md items-center">
           <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">MANUFACTURER SUPPORT PAGES</p>
           <div className="flex flex-wrap justify-center gap-2">
             {['ASUS', 'MSI', 'GIGABYTE', 'ASROCK', 'EVGA'].map(brand => (
               <button key={brand} className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-400 font-bold hover:text-white transition-all uppercase tracking-widest rounded">
                 {brand}
               </button>
             ))}
           </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <button className="w-full py-5 bg-emerald-700 hover:bg-emerald-600 text-white font-black uppercase tracking-[0.2em] rounded border border-emerald-500/50 shadow-xl shadow-emerald-500/10 transition-all">
            I'VE FINISHED DOWNLOADING — FIND FIRMWARE
          </button>
          <button className="w-full py-5 bg-transparent border-2 border-red-600 text-red-600 font-black uppercase tracking-[0.2em] rounded hover:bg-red-600/5 transition-all">
            RUN MANUAL BIOS/DMI FLASH
          </button>
        </div>

        <div className="w-full max-w-lg mt-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 text-center">
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-4">HARDWARE RETRIEVAL GUIDE</h4>
          <div className="space-y-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            <p>1. Reboot and press F2/DEL to enter BIOS.</p>
            <p>2. Note your Motherboard Model in 'System Info'.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecurityView = () => {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Security Protocol</h2>
        <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1 font-bold">Encapsulated protection and kernel-level masking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Kernel Masking', status: 'Active', desc: 'Hides system calls from low-level monitors' },
          { label: 'Process Scrambler', status: 'Optimal', desc: 'Randomizes memory offsets for core engines' },
          { label: 'Registry Redirect', status: 'Engaged', desc: 'Virtually emulates restricted system keys' },
          { label: 'File System Sandbox', status: 'Isolated', desc: 'Prevents direct I/O queries to storage' },
        ].map((item) => (
          <div key={item.label} className="bg-zinc-900/30 border border-white/5 rounded-xl p-8 hover:border-red-600/20 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tight italic group-hover:text-red-500 transition-colors">{item.label}</h3>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded">
                {item.status}
              </div>
            </div>
            <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 border border-red-600/20 rounded-2xl bg-red-600/5 text-center">
        <div className="flex flex-col items-center gap-4">
          <Shield className="w-8 h-8 text-red-600 animate-pulse" />
          <div>
            <p className="text-[10px] text-red-500 uppercase font-black tracking-[0.3em] mb-2">Internal Global Protection</p>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">Aetherial security layers are automatically calculated based on your hardware profile and target application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TraceScannerView = () => {
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-2xl mx-auto animate-in fade-in zoom-in duration-500 text-center">
      <h2 className="text-4xl font-black text-white uppercase tracking-[0.1em] mb-4">Trace Scanner</h2>
      
      <p className="text-zinc-500 text-sm leading-relaxed max-w-lg mb-12 uppercase tracking-wide">
        Acts like an anti-cheat auditing your PC. <br />
        Checks every fingerprint surface (motherboard, disk, MAC, GUIDs, WMI, logs) 
        and gives you a verdict.
      </p>

      <button 
        onClick={handleScan}
        disabled={scanning}
        className="w-full max-w-lg py-6 bg-red-900/80 hover:bg-red-800 text-white font-black uppercase tracking-[0.3em] rounded border border-red-600 transition-all shadow-[0_0_30px_rgba(153,27,27,0.3)] disabled:opacity-50"
      >
        {scanning ? <RefreshCcw className="w-5 h-5 mx-auto animate-spin" /> : "Run Trace Scan"}
      </button>

      <div className="mt-12 w-full">
        <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-6">Baseline Tools (HWID Ban Test)</p>
        <div className="flex gap-4">
          <button className="flex-1 py-4 bg-transparent border border-zinc-700 text-white text-[10px] font-black uppercase tracking-widest rounded hover:border-white transition-all">
            Snapshot Original
          </button>
          <button className="flex-1 py-4 bg-transparent border border-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-red-600/5 transition-all">
            Verify HWID Spoof
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardView = () => (
  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
    <div className="flex flex-col gap-3">
      {HWID_DATA.map((item) => (
        <div 
          key={item.id}
          className="group relative bg-[#0C0C0D] border border-white/5 rounded-xl p-5 hover:border-red-600/30 transition-all duration-300 flex items-center justify-between"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">{item.title}</h3>
            <div className="mt-2 space-y-1">
              <p className="font-mono text-[10px] text-zinc-600 uppercase">
                <span className="text-zinc-500 mr-2">Baseline:</span> {item.baseline}
              </p>
              <p className="font-mono text-[11px] text-zinc-300 uppercase">
                <span className="text-zinc-500 mr-2">Current:</span> {item.current}
              </p>
            </div>
          </div>
          
          <div className={cn(
            "px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest shadow-lg",
            item.status === 'spoofed' 
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500" 
              : "bg-red-600/10 border-red-600/30 text-red-600"
          )}>
            {item.status === 'spoofed' ? 'Spoofed' : 'Original'}
          </div>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button className="flex-1 px-8 py-4 bg-transparent border border-red-600/30 text-red-600 text-xs font-black uppercase tracking-[0.2em] rounded-lg hover:border-red-600 hover:bg-red-600/5 transition-all">
        Capture Baseline
      </button>
      <button className="flex-1 px-8 py-4 bg-red-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-lg hover:bg-red-700 shadow-xl shadow-red-600/20 transition-all">
        Verify & Refresh Data
      </button>
    </div>
  </div>
);

const ProductsView = () => {
  const [search, setSearch] = useState('');
  
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search modules, tools, assets..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-red-500/50 transition-all font-medium"
          />
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
          {['All Assets', 'Engines', 'Shaders', 'Utilities'].map(chip => (
            <button key={chip} className="px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {MOCK_PRODUCTS.map((p) => (
          <div key={p.id} className="group flex flex-col bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={p.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4">
                {p.status === 'updating' && <div className="px-3 py-1 bg-amber-500 text-[10px] font-black text-black rounded-lg uppercase shadow-lg">Updating</div>}
                {p.status === 'installed' && <div className="px-3 py-1 bg-emerald-500 text-[10px] font-black text-black rounded-lg uppercase shadow-lg">Ready</div>}
                {p.status === 'expired' && <div className="px-3 py-1 bg-zinc-800 text-[10px] font-black text-zinc-400 rounded-lg uppercase border border-white/10">Expired</div>}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]">{p.category}</span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{p.version}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{p.name}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-8 flex-1">{p.description}</p>
              
              <div className="flex items-center gap-3">
                <Button className="flex-1 text-xs py-3">
                  {p.status === 'installed' ? 'Launch Core' : p.status === 'updating' ? 'Syncing...' : 'Deploy Module'}
                </Button>
                <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>('hwid');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  const navItems = [
    { id: 'hwid', label: 'HWID STATUS', icon: Cpu },
    { id: 'serial', label: 'SERIAL CHANGER', icon: Fingerprint },
    { id: 'security', label: 'SECURITY', icon: Shield },
    { id: 'spoofer', label: 'SPOOFER', icon: Ghost },
    { id: 'flasher', label: 'FLASHER', icon: Database },
    { id: 'cleaner', label: 'CLEANER', icon: Eraser },
    { id: 'trace', label: 'TRACE SCANNER', icon: Radar },
    { id: 'stealth', label: 'STEALTH MODE', icon: EyeOff },
    { id: 'restore', label: 'RESTORE', icon: RotateCcw },
  ];

  const secondaryNav = [
    { id: 'settings', label: 'System Settings', icon: Settings },
    { id: 'support', label: 'Direct Support', icon: LifeBuoy },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-[#E0E0E0] overflow-hidden font-sans relative">
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-100px] left-[200px] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]"></div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col z-0 relative overflow-hidden pb-32">
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-8 bg-black/20 backdrop-blur-sm sticky top-0 z-30">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-800 rounded shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center justify-center font-black text-white shrink-0">
                A
              </div>
              <span className="text-lg font-bold tracking-tight uppercase text-white hidden sm:block">
                Aetherial
              </span>
            </div>
            
             <div className="relative w-96 hidden md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search modules, tools, assets..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-xs focus:outline-none focus:border-red-500/50 transition-all text-white placeholder:text-zinc-600"
                />
             </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <div className="flex items-center gap-2">
                Expires in: <span className="text-red-500 animate-pulse">28d 14h 22m</span>
              </div>
              <div className="flex items-center gap-2">
                Server Status: <span className="text-emerald-500">Optimized</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-l border-white/10 pl-10">
               <div className="text-right">
                  <p className="text-[11px] font-black text-white leading-none uppercase tracking-tighter italic">Vesper_Admin</p>
                  <p className="text-[8px] text-zinc-600 uppercase font-bold mt-1 tracking-widest">Active Session</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-red-600/30 flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
               </div>
            </div>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar pb-32">
          <div className="max-w-7xl mx-auto">
             <AnimatePresence mode="wait">
                <motion.div
                  key={currentView}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {currentView === 'hwid' && <DashboardView />}
                  {currentView === 'serial' && <SerialChangerView />}
                  {currentView === 'security' && <SecurityView />}
                  {currentView === 'spoofer' && <SpooferView />}
                  {currentView === 'flasher' && <FlasherView />}
                  {currentView === 'restore' && <RestoreView />}
                  {currentView === 'stealth' && <StealthView />}
                  {currentView === 'cleaner' && <CleanerView />}
                  {currentView === 'trace' && <TraceScannerView />}
                  {(currentView !== 'hwid' && currentView !== 'serial' && currentView !== 'security' && currentView !== 'spoofer' && currentView !== 'flasher' && currentView !== 'restore' && currentView !== 'stealth' && currentView !== 'cleaner' && currentView !== 'trace' && currentView !== 'settings') && (
                    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-12 bg-white/5 rounded-3xl border border-white/5">
                      <div className="w-20 h-20 bg-red-600/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/10">
                        <Settings className="w-8 h-8 text-red-500 animate-spin-slow" />
                      </div>
                      <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Module Under Calibration</h2>
                      <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">This secure node is currently undergoing maintenance. System integrity will be restored shortly.</p>
                      <button onClick={() => setCurrentView('hwid')} className="mt-10 text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest underline decoration-2 underline-offset-8">
                        Return to Dashboard
                      </button>
                    </div>
                  )}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Floating Bottom Taskbar */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 flex items-center gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as View)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group",
                  currentView === item.id 
                    ? "bg-red-600/20 text-white shadow-[inset_0_0_15px_rgba(220,38,38,0.1)]" 
                    : "text-zinc-500 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "w-4 h-4 transition-all duration-300",
                  currentView === item.id ? "text-red-500 scale-110 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" : "group-hover:text-red-400"
                )} />
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all duration-300",
                  currentView === item.id ? "w-auto opacity-100 mr-1" : "w-0 opacity-0"
                )}>
                  {item.label}
                </span>
              </button>
            ))}
            <div className="w-[1px] h-6 bg-white/10 mx-2" />
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="p-3 text-zinc-500 hover:text-red-500 transition-colors"
              title="Terminate Protocol"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        <footer className="absolute bottom-4 right-10 text-[8px] text-zinc-700 font-mono tracking-[0.4em] flex gap-8 pointer-events-none uppercase z-10">
          <span>Build: F982-A0</span>
          <span>© 2024 Aetherial</span>
        </footer>
      </main>
    </div>
  );
}
