import { test, expect } from '@playwright/test'

test('creating two invoices, one with the status pending and the other draft and then filtering them based on status', async ({
  page
}) => {
  await page.goto('http://localhost:5173/')
  await expect(page.getByRole('heading', { name: 'There is nothing here' })).toBeVisible()

  await page.getByRole('button', { name: '+ New Invoice' }).click()
  await expect(page.getByTestId('#header-id')).not.toBeVisible()

  //invoice pending
  await page.locator('#bill-from-street').click()
  await page.locator('#bill-from-street').fill('Baltupiai')
  await page.locator('#bill-from-country').click()
  await page.locator('#bill-from-country').fill('Lithuania')
  await page.locator('#bill-from-city').click()
  await page.locator('#bill-from-city').fill('Vilnius')
  await page.locator('#bill-from-post-code').click()
  await page.locator('#bill-from-post-code').fill('08311')
  await page.getByLabel("Client's Name").click()
  await page.getByLabel("Client's Name").fill('Gilda Kavaliauskienė')
  await page.getByLabel("Client's Email").click()
  await page.getByLabel("Client's Email").fill('kazlauskiene.aistra@gmail.com')
  await page.locator('#bill-to-address').click()
  await page.locator('#bill-to-address').fill('67 Doe gatvė')
  await page.locator('#bill-to-country').click()
  await page.locator('#bill-to-country').fill('Lithuania')
  await page.locator('#bill-to-city').click()
  await page.locator('#bill-to-city').fill('Visaginas')
  await page.locator('#bill-to-post-code').click()
  await page.locator('#bill-to-post-code').fill('05567')
  await page.getByLabel('Payment Due Date').fill('2025-09-25')
  await page.getByLabel('Invoice Description').click()
  await page.getByLabel('Invoice Description').fill('Project site css styles')

  await page.getByRole('button', { name: '+ Add New Item' }).click()
  await expect(page.locator('#item-name-0')).toBeVisible()
  await expect(page.locator('#item-quantity-0')).toBeVisible()
  await expect(page.locator('#item-price-0')).toBeVisible()
  await expect(page.locator('#item-total-price-0')).toBeVisible()
  await expect(page.getByRole('img', { name: 'Delete Icon' })).toBeVisible()

  await page.locator('#item-name-0').click()
  await page.locator('#item-name-0').fill('Light/Dark themes')
  await page.locator('#item-quantity-0').click()
  await page.locator('#item-quantity-0').fill('1')
  await page.locator('#item-price-0').click()
  await page.locator('#item-price-0').fill('45.3')

  await page.getByRole('button', { name: '+ Add New Item' }).click()
  await expect(page.locator('#item-name-1')).toBeVisible()
  await expect(page.locator('#item-quantity-1')).toBeVisible()
  await expect(page.locator('#item-price-1')).toBeVisible()
  await expect(page.locator('#item-total-price-1')).toBeVisible()
  await expect(page.getByRole('img', { name: 'Delete Icon' }).nth(1)).toBeVisible()

  await page.getByRole('button', { name: 'Save & Send' }).click()

  await page.getByRole('img', { name: 'Delete Icon' }).nth(1).click()
  await expect(page.locator('#item-name-1')).not.toBeVisible()
  await expect(page.locator('#item-quantity-1')).not.toBeVisible()
  await expect(page.locator('#item-price-1')).not.toBeVisible()
  await expect(page.locator('#item-total-price-1')).not.toBeVisible()

  await page.getByRole('button', { name: 'Save & Send' }).click()
  await expect(page.getByRole('heading', { name: 'There is nothing here' })).not.toBeVisible()

  //invoice draft
  await page.getByRole('button', { name: '+ New Invoice' }).click()
  await expect(page.getByTestId('#header-id')).not.toBeVisible()

  await page.locator('#bill-from-street').click()
  await page.locator('#bill-from-street').fill('Baltupiai')
  await page.locator('#bill-from-country').click()
  await page.locator('#bill-from-country').fill('Lithuania')
  await page.locator('#bill-from-city').click()
  await page.locator('#bill-from-city').fill('Vilnius')
  await page.locator('#bill-from-post-code').click()
  await page.locator('#bill-from-post-code').fill('08311')
  await page.getByLabel("Client's Name").click()
  await page.getByLabel("Client's Name").fill('Eileen Clark')
  await page.getByLabel("Client's Email").click()
  await page.getByLabel("Client's Email").fill('lmoore@bennett.com')
  await page.locator('#bill-to-address').click()
  await page.locator('#bill-to-address').fill('Studio 59v Jackson Summit')
  await page.locator('#bill-to-country').click()
  await page.locator('#bill-to-country').fill('United Kingdom')
  await page.locator('#bill-to-city').click()
  await page.locator('#bill-to-city').fill('Lake Jackchester')
  await page.locator('#bill-to-post-code').click()
  await page.locator('#bill-to-post-code').fill('BS273XD')
  await page.getByLabel('Payment Due Date').fill('2025-10-02')
  await page.getByLabel('Invoice Description').click()
  await page.getByLabel('Invoice Description').fill('Project tests')

  await page.getByRole('button', { name: '+ Add New Item' }).click()
  await expect(page.locator('#item-name-0')).toBeVisible()
  await expect(page.locator('#item-quantity-0')).toBeVisible()
  await expect(page.locator('#item-price-0')).toBeVisible()
  await expect(page.locator('#item-total-price-0')).toBeVisible()
  await expect(page.getByRole('img', { name: 'Delete Icon' })).toBeVisible()

  await page.locator('#item-name-0').click()
  await page.locator('#item-name-0').fill('End2End')
  await page.locator('#item-quantity-0').click()
  await page.locator('#item-quantity-0').fill('2')
  await page.locator('#item-price-0').click()
  await page.locator('#item-price-0').fill('55.3')

  await page.getByRole('button', { name: '+ Add New Item' }).click()
  await expect(page.locator('#item-name-1')).toBeVisible()
  await expect(page.locator('#item-quantity-1')).toBeVisible()
  await expect(page.locator('#item-price-1')).toBeVisible()
  await expect(page.locator('#item-total-price-1')).toBeVisible()
  await expect(page.getByRole('img', { name: 'Delete Icon' }).nth(1)).toBeVisible()

  await page.locator('#item-name-1').click()
  await page.locator('#item-name-1').fill('Unit Test')
  await page.locator('#item-quantity-1').click()
  await page.locator('#item-quantity-1').fill('3')
  await page.locator('#item-price-1').click()
  await page.locator('#item-price-1').fill('57.03')

  await page.getByRole('button', { name: 'Save as Draft' }).click()
  await expect(page.getByText('#0001Due 2025-09-25Gilda Kavaliauskienė$ 45.3pending')).toBeVisible()
  await expect(page.getByText('#0002Due 2025-10-02Eileen Clark$ 281.69draft')).toBeVisible()

  await page.getByRole('combobox').selectOption('draft')
  await expect(
    page.getByText('#0001Due 2025-09-25Gilda Kavaliauskienė$ 45.3pending')
  ).not.toBeVisible()
  await expect(page.getByText('#0002Due 2025-10-02Eileen Clark$ 281.69draft')).toBeVisible()

  await page.getByRole('combobox').selectOption('pending')
  await expect(page.getByText('#0001Due 2025-09-25Gilda Kavaliauskienė$ 45.3pending')).toBeVisible()
  await expect(page.getByText('#0002Due 2025-10-02Eileen Clark$ 281.69draft')).not.toBeVisible()

  await page.getByRole('combobox').selectOption('paid')
  await expect(
    page.getByText('#0001Due 2025-09-25Gilda Kavaliauskienė$ 45.3pending')
  ).not.toBeVisible()
  await expect(page.getByText('#0002Due 2025-10-02Eileen Clark$ 281.69draft')).not.toBeVisible()
})
