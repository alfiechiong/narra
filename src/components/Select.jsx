import { Select } from '@headlessui/react'

const HeadlessSelect = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  return (
    <Select name="status" aria-label="Project status">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </Select>
  )
}

export default HeadlessSelect
// Path: src/components/Select.jsx