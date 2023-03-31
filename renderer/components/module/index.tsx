export default function Module({ name, data }: { name: string; data: any }) {
  const isModuleOn = data?.children.On?.state
  const moduleColor = data?.children.Colour?.string
  return (
    <div style={{ background: moduleColor || '#444' }}>
      <h3>{name}</h3>
      {name !== 'Empty Slot' && (
        <>
          <div>{isModuleOn ? 'On' : 'Off'}</div>
          <code>{JSON.stringify(data)}</code>
        </>
      )}
    </div>
  )
}
