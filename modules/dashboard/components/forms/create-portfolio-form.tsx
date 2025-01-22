import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCreatePortfolio } from '@/modules/dashboard/hooks/useCreatePortfolio'
import { portfolioSchema } from '@/modules/dashboard/components/forms/form.schema'
import { categories } from '@/constants/categories'
import { Label } from '@/components/ui/label'
import { Form } from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import TextField from '@/components/fields/text-field'
import TextAreaField from '@/components/fields/text-area'
import SkillsField from '@/components/fields/skills-field'
import SelectCategoryField from '@/components/fields/select-category-field'
import FileField from '@/components/fields/file-upload'
import LoadingButton from '@/components/buttons/loading-button'

type CreatePortfolioFormSchema = z.infer<typeof portfolioSchema>

export const CreatePortfolioForm = () => {
  const methods = useForm<CreatePortfolioFormSchema>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      category: '',
      name: '',
      description: '',
      images: [],
      github_link: '',
      live_demo: '',
      page: 0,
      skills: [],
      video_url: '',
      type: 'free',
      isPublic: true,
    },
  })

  const { handleSubmit, watch, setValue } = methods
  const { triggerPortfolioCreate, isPending } = useCreatePortfolio()

  const isPublic = watch('isPublic')

  const onSubmit = (formValues: CreatePortfolioFormSchema) => {
    triggerPortfolioCreate(formValues)
  }

  return (
    <div className={'mb-5'}>
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1">
            <div className="space-y-2">
              <TextField name="name" label="Portfolio name" required={true} placeholder="Portfolio name" className="rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <SelectCategoryField name="category" label="Select category" required={true} placeholder="Select category" data={categories} />
          </div>
          <div className="space-y-2">
            <TextField type={'number'} name="page" label="Page number" required={true} placeholder="Page number" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <TextField name="video_url" label="Video url (YouTube, Loom or Vimeo only)" required={false} placeholder="https://" className="rounded-xl" />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="isPublic">Is this portfolio open source?</Label>
            <Checkbox
              id="isPublic"
              checked={isPublic}
              onCheckedChange={(checked: boolean) => {
                setValue('isPublic', checked)
                if (!checked) {
                  setValue('github_link', '')
                }
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <TextField name={'live_demo'} label={'Live Demo'} required={true} placeholder="https://your-demo-site.com" />
            </div>
            {isPublic === true ? (
              <div className="space-y-2">
                <TextField name={'github_link'} label={'Github link'} required={!!isPublic} placeholder="https://github.com/username/repo" />
              </div>
            ) : null}
          </div>
          <div className="space-y-2">
            <SkillsField name="skills" label="Skills & Technologies" required={true} />
          </div>
          <div className="space-y-2">
            <TextAreaField name={'description'} label={'Description'} required={true} placeholder="Describe your portfolio" className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <FileField name="images" label="Portfolios" maxFiles={5} />
          </div>
          <div className="mt-5 flex justify-end">
            <LoadingButton isLoading={isPending} variant={'secondary'} className="rounded-xl max-md:w-full">
              Create Portfolio
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  )
}
