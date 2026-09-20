export function SectionLabel({ children }: { children: string }) {
     return (
          <div
               style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '48px',
               }}
          >
               <span
                    style={{
                         fontFamily: "'JetBrains Mono', monospace",
                         fontSize: '11px',
                         color: '#04D4E6',
                         letterSpacing: '0.1em',
                         textTransform: 'uppercase',
                    }}
               >
                    {children}
               </span>
               <div style={{ flex: 1, height: '1px', backgroundColor: '#1a1a22' }} />
          </div>
     )
}
