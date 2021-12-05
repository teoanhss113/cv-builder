import { useDispatch, useSelector } from '../../contexts/ResumeContext.js'
import InlineToolbarEditor from '../../components/InlineToolbarEditor'
import { ItemWrapper } from '../../components/ItemWrapper.js'
import SectionWrapper from '../../components/SectionWrapper.js'

function Awards({ path, style, className }) {
  const stateValue = useSelector(path)
  const visible = useSelector(`metadata.sections.${path}.visible`)

  return (
    <>
      {visible && (
        <div style={style} className={className}>
          <SectionWrapper path={path}>
            {stateValue.map((item, index) => (
              <ItemWrapper
                key={index}
                path={path}
                item={item}
                index={index}
                single={stateValue.length === 1}
              >
                <Details path={path} item={item} index={index} />
              </ItemWrapper>
            ))}
          </SectionWrapper>
        </div>
      )}
    </>
  )
}

function Details({ path, item, index }) {
  const detailsValue = useSelector(`metadata.sections.${path}.details`)
  const colors = useSelector('metadata.colors')

  return (
    <div className="flex-1 min-w-0">
      <div
        style={{ color: colors.primary }}
        className="w-full flex flex-wrap text-sm"
      >
        {detailsValue.date.visible && (
          <InlineToolbarEditor path={`${path}[${index}].date`} />
        )}
      </div>
      {detailsValue.title.visible && (
        <InlineToolbarEditor
          path={`${path}[${index}].title`}
          className="text-lg"
        />
      )}
      {detailsValue.summary.visible && (
        <InlineToolbarEditor
          path={`${path}[${index}].summary`}
          className="text-sm mb-4"
        />
      )}
    </div>
  )
}

export default Awards