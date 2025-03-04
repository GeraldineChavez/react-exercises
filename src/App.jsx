import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Exercise1} from './Exercises/Exercise1/Exercise1';
import Exercise2 from './Exercises/Exercise2/Exercise2';
import Exercise3 from './Exercises/Exercise3/Exercise3';

function App() {

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800 holas">
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your code goes here */}
            {/* <Exercise1 /> */}
            {/* <Exercise2 /> */}
            <Exercise3 />

          </div>
        </main>
      </div>
    </>
  )
}

export default App
