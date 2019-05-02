import { BloodPressure, measureBp } from 'my-domain'
import { ThunkAction } from 'my-interface'
import { getPatient } from '../selectors'

export const measureBloodPressure =
  (bp: BloodPressure): ThunkAction => async (store) => {
    const patient = getPatient(store.getState())
    const event = measureBp(patient, bp)

    await store.dispatch({
      type: 'BP_ADDED',
      payload: { events: [event] },
    })
  }
